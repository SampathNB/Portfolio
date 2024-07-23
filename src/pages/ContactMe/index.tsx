import { Button, Container, Footer, Header, Input, Section, Textarea, Title } from "@components";
import { Icons } from "@utils";

export const ContactMe = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <div className="max-w-screen-md">
            <Title className="mb-5" subtext="Get In Touch" text="Contact me" />
            <p className="mb-4">Ready to embark on a collaborative journey or have a question? Feel free to reach out. I'm here to connect and create with you!</p>
            <div className="grid grid-cols-2 gap-5">
              <Input placeholder="Full Name" type="text" onChange={(e) => console.log(e)} icon={Icons.User} errorText="" />
              <Input placeholder="Last Name" type="text" onChange={(e) => console.log(e)} icon={Icons.User} errorText="" />
              <Input placeholder="Email" type="text" onChange={(e) => console.log(e)} icon={Icons.Email} errorText="" />
              <Input placeholder="Phone number" type="number" onChange={(e) => console.log(e)} icon={Icons.Call} errorText="" />
              <Textarea placeholder="Message" onChange={(e) => console.log(e)} icon={Icons.Message} className="col-span-2" />
              <div>
                <Button isLink={false}>Submit</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Footer />
    </>
  );
};
