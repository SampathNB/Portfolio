import { Button, Container, Footer, Header, Input, Section, Textarea, Title } from "@components";
import { Icons } from "@utils";
import { useCallback, useRef } from "react";
import { useForm } from "react-hook-form";


const useYupValidationResolver = (validationSchema: { validate: (arg0: any, arg1: { abortEarly: boolean; }) => any; }) =>
  useCallback(
    async (data: any) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        })

        return {
          values,
          errors: {},
        }
      } catch (errors: any) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors: any, currentError: { path: any; type: any; message: any; }) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {}
          ),
        }
      }
    },
    [validationSchema]
  )


export const ContactMe = () => {
  const form = useRef();
  const resolver = useYupValidationResolver(validationSchema)
  const { handleSubmit, register } = useForm({ resolver })



  const sendEmail = (e: any) => {
    e.preventDefault();


  };
  return (
    <>
      <Header />
      <Section>
        <Container>
          <div className="max-w-screen-md">
            <Title className="mb-5" subtext="Get In Touch" text="Contact me" />
            <p className="mb-4">Ready to embark on a collaborative journey or have a question? Feel free to reach out. I'm here to connect and create with you!</p>
            <form ref={form} onSubmit={sendEmail}  >
              <div className="grid grid-cols-2 gap-5">
                <Input name="firstname" placeholder="Full Name" type="text" onChange={(e) => console.log(e)} icon={Icons.User} errorText="" />
                <Input name="lastname" placeholder="Last Name" type="text" onChange={(e) => console.log(e)} icon={Icons.User} errorText="" />
                <Input name="email" placeholder="Email" type="text" onChange={(e) => console.log(e)} icon={Icons.Email} errorText="" />
                <Input name="phonenumber" placeholder="Phone number" type="number" onChange={(e) => console.log(e)} icon={Icons.Call} errorText="" />
                <Textarea name="message" placeholder="Message" onChange={(e) => console.log(e)} icon={Icons.Message} className="col-span-2" />
                <div>
                  <Button btnType="submit" isLink={false}>Submit</Button>
                </div>
              </div>
            </form>
          </div>
        </Container>
      </Section>
      <Footer />
    </>
  );
};
