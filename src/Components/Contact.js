import './Contact.css';

function Contact() {
  return (
    <div className="contact" id="Contact">
      <h2>Contact me <div className="underline"></div></h2>
      <div className="contact-sources">
        <a href="#" className="mail">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z"/></svg>
          </div>
          <p>talvesdev@outlook.com</p>
        </a>
        <a href="https://www.linkedin.com/in/thomas-alves-614840161/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BPztbtOtiQVO7IFce559RnQ%3D%3D" className="linkedin" about="_blank">
          <div>
            <svg viewBox="0 0 128 128">
              <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"></path>
            </svg>
          </div>
          <p>Thomas Alves</p>
        </a>
      </div>
    </div>
  );
}

export default Contact;