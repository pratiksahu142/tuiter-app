import React, {useState} from "react";
// import {createTuit} from "./reducers/tuits-reducer";
import {createTuitThunk} from "./services/tuits-thunks";
import {useDispatch} from "react-redux";
import {BsCardImage, BsFiletypeGif} from 'react-icons/bs';
import {HiOutlineChartBar} from 'react-icons/hi';
import {VscSmiley} from 'react-icons/vsc';
import {CiLocationOn} from 'react-icons/ci';

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();

  const tuitClickHandler = () => {
    const newTuit = {
      tuit: whatsHappening
    }
    dispatch(createTuitThunk(newTuit));
    setWhatsHappening("")
  }
  return (
      <div className="row">
        <div className="col-auto">
          <img src="/images/nasa.png" width={60}/>
        </div>
        <div className="col-10">
<textarea value={whatsHappening} placeholder="What's happening?"
          className="form-control border-0"
          onChange={(event) => setWhatsHappening(event.target.value)}>
</textarea>
          <div>
            <button
                className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                onClick={tuitClickHandler}>
              Tuit
            </button>
            <div className="text-primary fs-2">
              <BsCardImage className="me-2" size={40} color="#0d6efd"/>
              <BsFiletypeGif className="me-2" size={40} color="#0d6efd"/>
              <HiOutlineChartBar className="me-2" size={40} color="#0d6efd"/>
              <VscSmiley className="me-2" size={40} color="#0d6efd"/>
              <CiLocationOn className="me-2" size={40} color="#0d6efd"/>

            </div>
          </div>
        </div>
        <div className="col-12">
          <hr/>
        </div>
      </div>
  );
}
export default WhatsHappening;