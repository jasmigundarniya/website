"use client";

import React from "react";
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
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const page = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-3 h-screen px-5">
          <div className="flex justify-start gap-5">
            <div className="flex flex-col justify-end gap-5">
              <Image src={bg1} width={231} height={368} />
              <Image src={bg2} width={231} height={368} />
              <Image src={bg3} width={231} height={368} />
            </div>
            <div className="flex flex-col justify-end gap-5">
              <Image src={bg4} width={231} height={368} />
              <Image src={bg5} width={231} height={368} />
              <Image src={bg6} width={231} height={368} />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mx-12">
            <Image src={mainlogo} width={179} height={157} />
            <div className=" bg-[#F3F6FE] border border-[#30375033] rounded-md p-10 h-fit flex flex-col justify-center items-center gap-6 mt-6">
              <h1 className="text-[26px] font-bold text-center">
                Verification Code
              </h1>
              <h4 className="text-[18px] font-semibold text-center mb-3">
                Please enter the verification code we sent to your number.
              </h4>
              <PhoneInput
                country={"in"}
                value="1234567890"
                inputProps={{
                  style: {
                    width: "100%",
                    height: "50px",
                    borderRadius: "10",
                  },
                }}
              />
              <button className="bg-[#0B79DA] rounded-full w-full py-3 text-[16px] font-bold text-white mt-4 my-2 px-5">
                Send Code
              </button>
            </div>
          </div>
          <div className="flex justify-end gap-5">
            <div className="flex flex-col justify-end gap-5">
              <Image src={bg7} width={231} height={368} />
              <Image src={bg8} width={231} height={368} />
              <Image src={bg9} width={231} height={368} />
            </div>
            <div className="flex flex-col justify-end gap-5">
              <Image src={bg10} width={231} height={368} />
              <Image src={bg11} width={231} height={368} />
              <Image src={bg12} width={231} height={368} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
