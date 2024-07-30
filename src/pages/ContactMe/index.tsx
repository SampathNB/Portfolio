import {Button, Container, Footer, Header, Input, Section, Textarea, Title} from "@components";
import emailjs from "@emailjs/browser";
import {Icons} from "@utils";
import {useCallback, useRef, useState} from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";

const useYupValidationResolver = (validationSchema) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );
export const ContactMe = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useRef();

  const validationSchema = yup.object({
    firstName: yup.string().required("Please enter your first name"),
    lastName: yup.string().required("Please enter your last name"),
    email: yup.string().email().required("Please enter your email address"),
    phoneNumber: yup.string(),
    message: yup.string().required("Please enter your message"),
  });

  const resolver = useYupValidationResolver(validationSchema);
  const {
    handleSubmit,
    register,
    formState: {errors},
    reset,
  } = useForm({resolver});

  const emailJS = () => {
    setIsLoading(true);
    emailjs
      .sendForm("service_ftuy8fd", "template_cozaibe", form?.current, {
        publicKey: "7B_NcpWllf2uhIhNe",
      })
      .then(
        () => {
          alert("message sent successfully!");
          console.log("SUCCESS!");
          setIsLoading(false);
        },
        (error) => {
          alert("FAILED..." + error.text);
          setIsLoading(false);
        }
      );
  };

  const sendEmail = (_: unknown, e: HTMLFormElement) => {
    e.preventDefault();
    emailJS();
    reset();
  };
  return (
    <>
      <Header />
      <Section>
        <Container>
          <div className="max-w-screen-md">
            <Title className="lg:mb-5 mb-3" subtext="Get In Touch" text="Contact me" />
            <p className="mb-4">
              Ready to embark on a collaborative journey or have a question? Feel free to reach out. I'm here to connect and create with you!
            </p>
            <form ref={form} onSubmit={handleSubmit(sendEmail)}>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
                <Input
                  {...register("firstName")}
                  name="firstName"
                  id="firstName"
                  placeholder="Full Name"
                  type="text"
                  icon={Icons.User}
                  errorText={errors?.firstName?.message}
                />
                <Input
                  {...register("lastName")}
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  type="text"
                  icon={Icons.User}
                  errorText={errors?.lastName?.message}
                />
                <Input {...register("email")} name="email" id="email" placeholder="Email" type="text" icon={Icons.Email} errorText={errors?.email?.message} />
                <Input
                  {...register("phoneNumber")}
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Phone number"
                  type="text"
                  icon={Icons.Call}
                  errorText={errors?.phoneNumber?.message}
                />
                <Textarea
                  {...register("message")}
                  name="message"
                  id="message"
                  placeholder="Message"
                  icon={Icons.Message}
                  className="sm:col-span-2 col-span-1"
                  errorText={errors?.message?.message}
                />
                <div>
                  <Button btnType="submit" isLink={false}>
                    Submit
                  </Button>
                  {isLoading && "Sending..."}
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
