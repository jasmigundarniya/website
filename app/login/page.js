"use client";
import bg1 from "@/public/assets/images/bg1.png";
import bg2 from "@/public/assets/images/bg2.png";
import bg3 from "@/public/assets/images/bg3.png";
import bg4 from "@/public/assets/images/bg4.png";
import bg5 from "@/public/assets/images/bg5.png";
import bg6 from "@/public/assets/images/bg6.png";
import bg7 from "@/public/assets/images/bg7.png";
import bg8 from "@/public/assets/images/bg8.png";
import bg9 from "@/public/assets/images/bg9.png";
import bg10 from "@/public/assets/images/bg10.png";
import bg11 from "@/public/assets/images/bg11.png";
import bg12 from "@/public/assets/images/bg12.png";
import mainlogo from "@/public/assets/images/mainlogo.png";
import left from "@/public/assets/images/left.png";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../common/firebase.auth";
import OtpInput from "react-otp-input";
import { toast } from "react-toastify";
import { GetApi } from "../api/apiService";
import { API_PATH } from "../api/apiList";



const page = () => {
  const [otpDetails, setOptDetails] = useState({ showOpt: false, mobile: "", optNumber: "", loading: false, disable: true });
  const [OTP, setOTP] = useState("");


  const ChangePhoneHandel = (value) => {
    let temp = "+" + value;
    setOptDetails((prev) => ({ ...prev, mobile: temp }))
  };

  function onCaptchaVerify() {
    setOptDetails((prev) => ({ ...prev, loading: true }))
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            // onSignup();
          },
          "expired-callback": () => { },
        },
        auth
      );
    }
  }

  const onSignup = (e) => {
    e.preventDefault();
    onCaptchaVerify();
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, otpDetails.mobile, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        toast.success("OTP sended successfully!");
        setOptDetails((prev) => ({ ...prev, showOpt: true, loading: false }))
      })
      .catch((error) => {
        setOptDetails((prev) => ({ ...prev, loading: false }))
        console.log(error);
      });
  };

  const handleBack = () => {
    setOptDetails({ showOpt: false, mobile: "", optNumber: "", loading: false, disable: true })
  }

  const handleChangeOtp = (otp) => {
    if (otp.length <= 5) {
      setOptDetails((prev) => ({ ...prev, optNumber: otp }))
    } else {
      setOptDetails((prev) => ({ ...prev, optNumber: otp, disable: false }))
    }
  };

  const OnSubmitOtp = async () => {
    setOptDetails((prev) => ({ ...prev, loading: true }))
    window.confirmationResult
      .confirm(otpDetails.optNumber)
      .then(async (res) => {
        console.log(res.user.accessToken, '>>>res')
        let check = GetApi(API_PATH.checkProfile, res.user.accessToken)
        // Set a session cookie (no expiration time)
        // document.cookie = `eris=${"myValue"}; path=/`;
        console.log(check, '>>>check')
      })
      .catch((err) => {
        setloader(false);
        toast.error("Incorrect OTP");
        console.log(err);
      });
  };

  return (
    <div>
      <div className="grid grid-cols-3 h-screen px-5 xl:flex">
        <div className="flex justify-start gap-5 lg:hidden">
          <div className="flex flex-col justify-end gap-5 h-screen">
            <Image src={bg1} width={231} height={368} alt='' className="xl:w-[250px] xl:h-[300px]" />
            <Image src={bg2} width={231} height={368} alt='' className="xl:w-[250px] xl:h-[300px]" />
            <Image src={bg3} width={231} height={368} alt='' className="xl:w-[250px] xl:h-[300px]" />
          </div>
          <div className="flex flex-col justify-end gap-5 h-screen">
            <Image src={bg4} width={231} height={368} alt='' className="xl:w-[250px] xl:h-[300px]" />
            <Image src={bg5} width={231} height={368} alt='' className="xl:w-[250px] xl:h-[300px]" />
            <Image src={bg6} width={231} height={368} alt='' className="xl:w-[250px] xl:h-[300px]" />
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:mx-32 md:mx-20 sm:mx-0">
          <div id="recaptcha-container"></div>
          {
            !otpDetails.showOpt ?
              <div className="flex flex-col justify-center items-center mx-12 sm:mx-5 w-full">
                <Image src={mainlogo} width={179} height={157} alt='' />
                <div className=" bg-[#F3F6FE] border border-[#30375033] rounded-md p-10 w-full h-fit flex flex-col justify-center items-center gap-6 mt-6">
                  <h1 className="text-[26px] font-bold text-center">Login</h1>
                  <h4 className="text-[18px] font-semibold text-center mb-3">
                    To continue enter your phone number.
                  </h4>
                  <PhoneInput
                    value={otpDetails.mobile}
                    country={"in"}
                    onChange={ChangePhoneHandel}
                    inputProps={{
                      style: {
                        width: "100%",
                        height: "50px",
                        borderRadius: "10",
                      },
                    }}
                  />
                  <button type="button"
                    onClick={(e) => onSignup(e)}
                    className={`${otpDetails.loading ? 'bg-[#64A9E8]' : 'bg-[#0B79DA]'} rounded-full w-full py-3 text-[16px] font-bold text-white mt-4 my-2 px-5 flex justify-center`}
                  >
                    {otpDetails.loading ?
                      <>
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>loading...</span>
                      </>
                      :
                      <span>Send Code</span>
                    }


                  </button>
                </div>
              </div>
              :
              <div className="flex flex-col justify-center items-center mx-12 sm:mx-5 w-full">
                <Image src={mainlogo} width={179} height={157} alt='' />
                <div className=" bg-[#F3F6FE] border border-[#30375033] rounded-md p-10 h-fit flex flex-col justify-center items-center gap-6 mt-6">
                  <h1 className="text-[26px] font-bold text-center">
                    Verification Code
                  </h1>
                  <h4 className="text-[18px] font-semibold text-center mb-3">
                    Please enter the verification code we sent to your number.
                  </h4>
                  <OtpInput
                    value={otpDetails.optNumber}
                    onChange={handleChangeOtp}
                    autoFocus
                    numInputs={6}
                    renderSeparator={<span style={{ width: "24px" }}></span>}
                    renderInput={(props) => <input {...props} />}
                    isInputNum={true}
                    shouldAutoFocus={true}
                    inputStyle={{ width: "48px", height: "48px" }}
                  />
                  <button className={`${otpDetails.disable ? 'bg-[#64A9E8]' : 'bg-[#0B79DA]'}  rounded-full w-full py-3 text-[16px] font-bold text-white mt-4 my-2 px-5 flex justify-center items-center`} disabled={otpDetails.disable} onClick={OnSubmitOtp}>
                    Verify
                  </button>
                  <div>
                    <p className="text-[16px] text-gray-400 text-center">
                      Did you don’t get code?{" "}
                      <span className="text-black"> Request new <br /> code in 00:05</span>
                    </p>
                    <div className="text-[16px] text-[#0B79DA] font-normal flex gap-2 justify-center items-center mt-5 cursor-pointer" onClick={handleBack}>
                      <Image src={left} width={20} height={20} alt='' />
                      Back
                    </div>
                  </div>
                </div>
              </div>

          }
        </div>

        <div className="flex justify-end gap-5 lg:hidden">
          <div className="flex flex-col justify-end gap-5 h-screen">
            <Image src={bg7} width={231} height={368} alt='' className="xl:w-[250px] xl:h-[300px]" />
            <Image src={bg8} width={231} height={368} alt='' className="xl:w-[250px] xl:h-[300px]" />
            <Image src={bg9} width={231} height={368} alt='' className="xl:w-[250px] xl:h-[300px]" />
          </div>
          <div className="flex flex-col justify-end gap-5 h-screen">
            <Image src={bg10} width={231} height={368} alt='' className="xl:w-[250px] xl:h-[300px]" />
            <Image src={bg11} width={231} height={368} alt='' className="xl:w-[250px] xl:h-[300px]" />
            <Image src={bg12} width={231} height={368} alt='' className="xl:w-[250px] xl:h-[300px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
