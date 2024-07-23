import {Container, Footer, Header, Input, Section, Title} from "@components";
import {Icons} from "@utils";

export const ContactMe = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Title className="mb-5" subtext="Get In Touch" text="Contact me" />
          <div className="grid grid-cols-2 gap-5">
            <Input placeholder="Full Name" type="text" onChange={(e) => console.log(e)} icon={Icons.User} errorText="" />
            <Input placeholder="Last Name" type="text" onChange={(e) => console.log(e)} icon={Icons.User} errorText="" />
            <Input placeholder="Email" type="text" onChange={(e) => console.log(e)} icon={Icons.Email} errorText="" />
            <Input placeholder="Phone number" type="number" onChange={(e) => console.log(e)} icon={Icons.Call} errorText="" />
          </div>
        </Container>
      </Section>
      <Footer />
    </>
  );
};
