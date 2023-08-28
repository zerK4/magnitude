import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  BsEnvelopeAtFill,
  BsFillPhoneVibrateFill,
  BsHeartFill,
  BsPhoneFill,
  BsPinMap,
} from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-mag min-h-[20vh] flex items-center flex-col">
      <div className="controlledWidth flex md:flex-row flex-col items-center gap-4 justify-between">
        <div className="w-full md:w-4/5 flex gap-2 flex-col items-center md:items-start">
          <div className="relative h-16 w-16">
            <Image
              src={"/assets/logo-footer.png"}
              alt="Footer logo image"
              fill
              className="object-contain h-16 w-16"
            />
          </div>
          <div className="w-[90%] text-gray-200 text-sm">
            Magnitude Dance este comunitatea unde energia și buna dispoziție
            alimentează pasiunea, iar curajul de a depăși limite este cultivat
            prin exercițiu constant. Împreună, învățăm pas cu pas să ne exprimăm
            personalitatea cu atitudine și dezinvoltură, pășim în afara
            granițelor rutinei zilnice și ne colorăm viețile transpunând în dans
            trăirile noastre cele mai intense. We are emotion in motion!
          </div>
        </div>
        <div className="text-white w-[90%] md:w-[30%]">
          <h3 className="text-2xl font-semibold">Contacteaza-ne</h3>
          <div className="">
            <p className="flex items-center gap-2">
              <BsPinMap className="text-xl text-white" />
              <span className="">str. Sf. Sava 10, Iasi</span>
            </p>
            <p className="flex items-center gap-2">
              <BsFillPhoneVibrateFill className="text-xl text-white" />
              <Link href="tel:0758515946" className="">
                +40 758515946
              </Link>
            </p>
            <p className="flex items-center gap-2">
              <BsEnvelopeAtFill className="text-xl text-white" />
              <Link href="mailto:office@magnitudedance.ro" className="">
                office@magnitudedance.ro
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center h-10 text-xs text-neutral-500">
        Build with <BsHeartFill className="text-red-500 mx-2" /> by zerka
      </div>
    </div>
  );
}

export default Footer;
