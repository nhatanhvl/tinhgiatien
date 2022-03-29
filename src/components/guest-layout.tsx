import Footer from "./footer";

const GuestLayout: React.FC<React.PropsWithChildren<{}>> = (props) => (
  <div>
    {props.children}
    <br />
    <Footer />
  </div>
);

export default GuestLayout;
