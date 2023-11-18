const Home = () => {
  return (
    <section>
      <center>
        <strong>
          <a className="fa fa-linkedin social-link" style={{ fontSize: '36px', color: '#0072B1' }} href="https://www.linkedin.com/in/zain-amin/" />
          <a className="fa fa-github social-link" style={{ fontSize: '36px', color: 'black' }} href="https://github.com/ZainAmin" />
          <a className="fa fa-graduation-cap social-link" style={{ fontSize: '36px', color: '#4285F4' }} href="https://scholar.google.com/citations?user=f3uZ9NsAAAAJ&hl=en" />
          <a className="fa fa-twitter social-link" style={{ fontSize: '36px', color: 'dodgerblue' }} href="https://twitter.com/Zain_Amin_" />
          <a className="fa fa-envelope social-link" style={{ fontSize: '36px', color: 'purple' }} href="mailto: Muhammad-Zain_Amin@etu.u-bourgogne.fr" />
        </strong>
      </center>

      <br />

      <h2 id="biography">Biography</h2>
      <hr />
      <p>I am currently pursuing an Erasmus Mundus Joint Master Degree in Medical Imaging and Applications (MAIA), coordinated by the University of Girona, Spain, along with the Université de Bourgogne, France, and the University of Cassino, Italy as partner universities. I am a research collaborator with Prof. Yongjian Hu's Lab at the South China University of Technology and Prof. Yu Guan at the University of Warwick, UK.
      <br />
      <br />
      I received my Bachelor's degree in Computer Science from the University of Engineering and Technology, Lahore, Pakistan. Also, I got the chance to do a Summer of Code internship at JSK Lab, University of Tokyo, Japan, working on the prediction of robotics execution failures using deep learning models, with funding from Google.
      </p>

      <h2 id="research-interests">Research Interests</h2>
      <hr />

      <p align="justify">I have broad interests in medical imaging analysis, deep learning, image processing, and natural language processing. My current research topics are about:</p>

      <ul>
        <li><p><strong>Image Registration</strong></p></li>
        <li><p><strong>Medical Image Analysis</strong><br />- breast mass detection and segmentation<br />- skin lesions detection<br />- diabetic retinopathy severity classification/lesions segmentation</p></li>
        <li><p><strong>Learning with Low Supervision</strong><br />- weakly supervised image segmentation<br />- semi-supervised/unsupervised cross-domain image classification</p></li>
        <li><p><strong>Natural Language Processing</strong><br />- sentiment analysis/emotion AI</p></li>
      </ul>

      <h2 id="important-updates">Important Updates</h2>
      <hr />

      <ul>
        {/* Aquí van los elementos de la lista con los updates */}
      </ul>

      <h2 id="contact">Contact</h2>
      <hr />
      <p>Email: <a href="mailto: Muhammad-Zain_Amin@etu.u-bourgogne.fr">Muhammad-Zain_Amin@etu.u-bourgogne.fr</a></p>
    </section>
  );
};

export default Home;
