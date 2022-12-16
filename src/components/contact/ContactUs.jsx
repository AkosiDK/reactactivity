import * as React from "react";

export default function ContactUs() {
  return (
    <>
      <div className="p-4 border rounded">
        <div className="row">
          <div className="col-6 d-flex justify-content-center">
            <p>contact us at: 12323544567</p>
            <br />
            <p>mr. bombastic</p>
          </div>
          <div className="col-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.531738278029!2d-122.08624688465318!3d37.42199987978306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1588875350986!5m2!1sen!2sus"
              width="600"
              height="450"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}