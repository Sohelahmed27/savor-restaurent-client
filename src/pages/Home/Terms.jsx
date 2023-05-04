/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import terms from "../../assets/terms.jpg"

const Terms = () => {
  return (
    <div>
    <Image style={{height:'300px', width:'100%'}} src={terms}></Image>
      <Container>
        <h1 className="text-primary text-center my-4">Terms and conditions</h1>

        <div>
          <h6 style={{linHeight:'2em'}}>
            1. Acceptance of Terms and Conditions: By accessing and using the
            website "Savor of British Cuisine", you agree to be bound by these
            Terms and Conditions. If you do not agree to these terms, you should
            not access or use the website.
          </h6>
          <h6>
            2. Use of the Website: The content on this website is for
            informational purposes only and is subject to change without notice.
            We make no warranties or representations about the accuracy,
            reliability, completeness, or timeliness of the content.
          </h6>
          <h6>
            3. Intellectual Property: The content and design of this website are
            the property of Savor of British Cuisine and are protected by
            copyright, trademark, and other intellectual property laws. You may
            not reproduce, modify, distribute, or otherwise use any of the
            content or design without our prior written consent.
          </h6>
          <h6>
            4. Links to Third-Party Websites: This website may contain links to
            third-party websites, which are provided for your convenience only.
            We have no control over the content or availability of these
            websites and do not endorse or make any representations about them.
            Your use of these third-party websites is at your own risk.
          </h6>
          <h6>
            5. Limitation of Liability: We will not be liable for any damages,
            including but not limited to, direct, indirect, incidental,
            consequential, or punitive damages, arising out of your use or
            inability to use this website, even if we have been advised of the
            possibility of such damages.
          </h6>
          <h6>
            6. Governing Law: These Terms and Conditions are governed by and
            construed in accordance with the laws of the United Kingdom. Any
            disputes arising out of or related to these Terms and Conditions
            will be subject to the exclusive jurisdiction of the courts of the
            United Kingdom.
          </h6>
          <h6>
            7. Changes to Terms and Conditions: We reserve the right to modify
            these Terms and Conditions at any time without notice. Your
            continued use of the website after any such changes constitutes your
            acceptance of the new Terms and Conditions.
          </h6>
        </div>
        <Link to='/register'><button className='btn btn-primary'>Accept</button></Link>
      </Container>
    </div>
  );
};

export default Terms;
