import {
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Textarea,
} from "@headlessui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "./contact.schema";
import showSuccessToast from "../common/Toast";
import { useState } from "react";
import Spinner from "../common/LoadingSpinner";

const ContactForm = () => {
  const [key, setKey] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    shouldFocusError: true,
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    showSuccessToast("Message sent successfully!");
    reset();
    setKey((prev) => prev + 1);
  };

  const inputErrorClass = (error?: unknown) =>
    error ? "border-error border-2 focus:ring-error" : "";

  return (
    <form id="contact-form" key={key} onSubmit={handleSubmit(onSubmit)}>
      <Fieldset
        id="contact-fieldset"
        className={`flex flex-col gap-2 ${isSubmitting ? "opacity-70" : ""}`}
        disabled={isSubmitting}
      >
        <Legend className="text-2xl font-semibold">Contact Form</Legend>
        <div className="flex flex-col gap-5">
          <Field className="flex flex-col gap-2">
            <Label className="text-lg font-semibold">Full name</Label>
            <Input
              {...register("name")}
              type="text"
              placeholder="Enter your full name"
              className={`input-contact ${inputErrorClass(errors.name)}`}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <p role="alert" className="text-error text-sm">
                {errors.name.message}
              </p>
            )}
          </Field>
          <Field className="flex flex-col gap-2">
            <Label className="text-lg font-semibold">Email</Label>
            <Input
              {...register("email")}
              type="email"
              placeholder="Enter your email address"
              className={`input-contact ${inputErrorClass(errors.email)}`}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p role="alert" className="text-error text-sm">
                {errors.email.message}
              </p>
            )}
          </Field>
          <Field className="flex flex-col gap-2">
            <Label className="text-lg font-semibold">Subject</Label>
            <Input
              {...register("subject")}
              type="text"
              placeholder="Enter the subject of your message"
              className={`input-contact ${inputErrorClass(errors.subject)}`}
              aria-invalid={errors.subject ? "true" : "false"}
            />
            {errors.subject && (
              <p role="alert" className="text-error text-sm">
                {errors.subject.message}
              </p>
            )}
          </Field>
          <Field className="flex flex-col gap-2">
            <Label className="text-lg font-semibold">Message</Label>
            <Textarea
              {...register("message")}
              placeholder="Write your message here"
              className={`input-contact h-32 ${inputErrorClass(errors.message)}`}
              aria-invalid={errors.message ? "true" : "false"}
            ></Textarea>
            {errors.message && (
              <p role="alert" className="text-error text-sm">
                {errors.message.message}
              </p>
            )}
          </Field>
          <Field>
            <button
              className={`btn-primary btn-base mt-4 ${
                !isValid || isSubmitting ? "cursor-not-allowed opacity-50" : ""
              }`}
              type="submit"
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Spinner />
                  Sending message...
                </>
              ) : (
                "Send message"
              )}
            </button>
          </Field>
        </div>
      </Fieldset>
    </form>
  );
};

export default ContactForm;
