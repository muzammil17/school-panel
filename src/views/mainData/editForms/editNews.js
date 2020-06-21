import React, { Component } from "react";
import FormInput from "./FormInput";
import SubmitButton from "./submitButton";
import { Api } from "../../common/Api";
import moment from "moment";
import { serverUrlImage } from "../../utils/Constants";
import LoadingButton from "../addForms/loadingButton";
import { Alert } from "reactstrap";

class EditNews extends Component{
  state={
    news: null,
    id: '',
    title: '',
    classArray: [],
    description: '',
    errorText: '',
    Image: null,
    ImageData: null,
    loading: true

  }
  handleChange = (e) => {
    console.log(e.target.name, e.target.value);

    this.setState({
      [e.target.name]: e.target.value,
      errorText: "",
      [e.target.name + "Error"]: "",
      success: false,
    });
  };
  componentDidMount(){
      Api("class", "get")
      .then((response) => {
        console.log(response.data);
        this.setState({
          classArray: response.data.class,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
      Api('news/'+this.props.match.params.newsId, 'get')
      .then(response=>{
        console.log(response.data);
        var news = response.data.news
        this.setState({
          news: news,
          id: news.id,
          title: news.title,
          date: moment(new Date(news.Newsdate)).format("YYYY-MM-DD"),
          description: news.body,
          loading: false
        })
        if(news.image){
          this.setState({
            ImageData: news.image
          })
        }
        if(!news.class_id){
          this.setState({
            classes: news.class
          })
        }
        else{
          this.setState({
            classes: news.class_id
          })
        }
      })
      .catch(error=>{
        console.log(error.response);
      }) 
  }
  handleImage = (e) => {
    console.log(e.target.files);
    this.setState({
      Image: e.target.files[0],
    });
  };
  submit=(e)=>{
    e.preventDefault();
    var validation = true;
    if(this.state.title == ''){
      this.setState({
        titleError: '* Title cannot be empty'
      })
      validation = false;
    }
    if(this.state.description == ''){
      this.setState({
        descriptionError: '* Description cannot be empty'
      })
      validation = false
    }
    if(validation){
      const formData = new FormData(); 
      if(this.state.Image){
        formData.append('image',this.state.Image)
      }
      formData.append('newsFor', this.state.classes)				
      formData.append('NewsDate', this.state.date)
      formData.append('title', this.state.title)
      formData.append('body', this.state.description)	
      this.setState({
        loading: true,
      });
      Api("news/"+ this.state.id , "post", formData)
        .then((response) => {
          console.log(response);
          this.setState({
            loading: false,
            success: true,
          });
          this.componentDidMount();
        })
        .catch((error) => {
          console.log(error);
          this.setState({
            loading: false,
          });
          if (error.response) {
            console.log(error.response);
            this.setState({
              errorText: error.response.data.message,
            });
          } else {
            this.setState({
              errorText: "* Network Error",
            });
          }
        });
    }
  }
  render(){
    if (this.state.loading) {
      return <p>loading...</p>;
    }
  return (
    <div className="animated fadeIn">
      <div className="card ">
        <form className="form card-body">
          <div className="row">
              <div className=" col-md-6 col-sm-12">
                <div className="form-group">
                  <label htmlFor="exampleFormControlFile1">Change Image : </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="exampleFormControlFile1"
                    name="FImage"
                    onChange={this.handleImage}
                    defaultValue={this.state.Image}
                  />
                </div>
              </div>
            </div>
          {this.state.ImageData !== null && (
              <React.Fragment>
                <div className="row">
                  <div className=" col-6 col-sm-3 ">
                    <img src={serverUrlImage + this.state.ImageData} style={{height: 150}} />
                  </div>
                  {/* <div className="col-sm-4 col-8">
                    <span className="float-left ">abc.png</span>
                  </div> */}
                </div>
                <hr></hr>
              </React.Fragment>
            )}
          <FormInput
            Label="Title :"
            forLabel="title"
            type="text"
            placeHolder="Holiday"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <small style={{ color: "#f86c6b" }}>{this.state.titleError}</small>
          <FormInput
            Label="Date :"
            forLabel="dateTeacher"
            type="date"
            name="date"
            value = {this.state.date}
            onChange={this.handleChange}
            placeHolder=""
          />
          <div className="row">
            <div className="col-sm-12 formInput">
              <div className="form-group">
                <label htmlFor="sel1">Class :</label>
                <select className="form-control select" id="sel1" name="classes" value={this.state.classes}  onChange={this.handleChange}>
                <option value="All">All</option>
                   {this.state.classArray.map((element) => {
                      return (
                        <option key={element.id} value={element.id}>
                          {element.name}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 formInput" cols="">
              <label htmlFor="description">Details :</label>
              <textarea
                placeholder="Describe News..."
                className="p-3"
                rows="5"
                value = {this.state.description}
                onChange={this.handleChange}
                name="description"
              ></textarea>
            </div>
          </div>
          {this.state.errorText != "" && (
              <Alert color="danger" className="mt-3">
                {this.state.errorText}
              </Alert>
            )}
            {this.state.success && (
              <Alert color="success" className="mt-3">
                Data successfully submitted.
              </Alert>
            )}
            {this.state.loading ? (
              <LoadingButton />
            ) : (
              <SubmitButton onClick={this.submit} />
            )}
        </form>
      </div>
    </div>
  );
}
}

export default EditNews;
