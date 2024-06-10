"use client";

import { useRef, useState } from "react";

import { EmailSchema, emailSchema } from "../validation/email";

import { validateTelephone } from "../validation/telephone";

export default function ControlledAndUncontrolled() {
  const [email, setEmail] = useState<EmailSchema>("");

  const [emailError, setEmailError] = useState("");

  const telephoneRef = useRef<HTMLInputElement>(null);

  const [telephoneError, setTelephoneError] = useState("");

  const [showModal, setShowModal] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const validateEmail = emailSchema.safeParse(newEmail);

    if (validateEmail.success) {
      setEmailError("");
    } else {
      setEmailError(validateEmail.error.message);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const telephone = telephoneRef.current?.value;

    const validationTelephone = validateTelephone.safeParse(telephone);

    if (validationTelephone.success) {
      setTelephoneError("");
    } else {
      setTelephoneError(validationTelephone.error.message);
    }

    if (emailError === "" && telephoneError === "" && telephone && email) {
      setShowModal(true);
    }
  };

  const showModalContent = (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-10">
        <div className="text-2xl">Thank you for submitting</div>
        <button
          onClick={() => {
            setShowModal(false);
            setEmail("");
            telephoneRef.current!.value = "";
          }}
          className="p-3 bg-red-500 text-white"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <form
        className="flex justify-center items-center h-screen"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center flex-row">
            <label
              htmlFor="emailInput"
              className="p-3 flex justify-center items-center"
            >
              Enter your email
            </label>
            <input
              id="emailInput"
              className="border-2 p-2 w-fit"
              placeholder="Enter a new email address"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />

            {emailError && (
              <div className="text-red-500 mt-2">{emailError}</div>
            )}
          </div>

          <div className="flex justify-center items-center">
            <label
              htmlFor="telephoneInput"
              className="p-3 flex justify-center items-center"
            >
              Enter your telephone
            </label>
            <input
              ref={telephoneRef}
              id="telephoneInput"
              className="border-2 p-2 w-fit"
              placeholder="Enter your telephone number"
              type="tel"
            />
            {telephoneError && (
              <div className="text-red-500 mt-2">{telephoneError}</div>
            )}
          </div>
          <div className="flex justify-center items-center">
            <button type="submit" className="p-3 bg-red-500 text-white">
              Submit
            </button>
          </div>
        </div>
      </form>
      {showModal && showModalContent}
    </div>
  );
}
