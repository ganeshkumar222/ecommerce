import React, { useState } from "react";

export const Address = () => {
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [address, setAddress] = useState();
  let [mobile, setMobile] = useState();

  let FormSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    console.log(name, email, address, mobile);
  };
  return (
    <>
      <div className="container">
        <h4 className="h4 text-center mt-2 mb-2">Delivery Form</h4>
        <form>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={name}
              required
              onChange={() => {
                setName(event.target.value);
              }}
            />
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email:
            </label>
            <input
              type="Email"
              className="form-control"
              id="exampleInputPassword1"
              value={email}
              required
              onChange={() => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Mobile" className="form-label">
              Mobile:
            </label>
            <input
              required
              type="text"
              className="form-control"
              value={mobile}
              onChange={() => {
                setMobile(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address:
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={address}
              required
              onChange={() => {
                setAddress(event.target.value);
              }}
            ></textarea>
            {/* <input
              type="text-area"
              className="form-control"
              id="exampleInputPassword1"
              
            /> */}
          </div>

          <button
            className="btn btn-primary"
            onClick={() => {
              FormSubmit(event);
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
