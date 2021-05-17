import React, { Fragment } from "react";

const SocialNetworkForm = (props) => {
  const { twitter, facebook, linkedin, youtube, instagram, onChange } = props;
  console.log(props);
  return (
    <Fragment>
      <div className="form-group social-input">
        <i className="fab fa-twitter fa-2x"></i>
        <input
          type="text"
          placeholder="Twitter URL"
          name="twitter"
          value={twitter}
          onChange={(e) => onChange(e)}
        />
      </div>

      <div className="form-group social-input">
        <i className="fab fa-facebook fa-2x"></i>
        <input
          type="text"
          placeholder="Facebook URL"
          name="facebook"
          value={facebook}
          onChange={(e) => onChange(e)}
        />
      </div>

      <div className="form-group social-input">
        <i className="fab fa-youtube fa-2x"></i>
        <input
          type="text"
          placeholder="YouTube URL"
          name="youtube"
          value={youtube}
          onChange={(e) => onChange(e)}
        />
      </div>

      <div className="form-group social-input">
        <i className="fab fa-linkedin fa-2x"></i>
        <input
          type="text"
          placeholder="Linkedin URL"
          name="linkedin"
          value={linkedin}
          onChange={(e) => onChange(e)}
        />
      </div>

      <div className="form-group social-input">
        <i className="fab fa-instagram fa-2x"></i>
        <input
          type="text"
          placeholder="Instagram URL"
          name="instagram"
          value={instagram}
          onChange={(e) => onChange(e)}
        />
      </div>
    </Fragment>
  );
};
export default SocialNetworkForm;
