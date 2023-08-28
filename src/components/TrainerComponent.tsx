import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function TrainerComponent() {
  return (
    <div className="flex justify-center min-h-[40vh] md:mt-32 overflow-hidden">
      <div className="controlledWidth">
        <h2 className="text-mag text-5xl font-bold px-2">Instructor</h2>
        <div className="mt-4 flex items-center flex-col md:flex-row">
          <div className="relative h-[40vh] w-full md:w-1/2 overflow-hidden">
            <Image
              src={"/assets/trainer.jpg"}
              fill
              alt="Trainer image"
              className="object-cover object-left-top"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="w-1/2 border-b-2 border-mag md:text-right text-3xl p-2 px-4">
              Cosmin Ioneasa
            </h3>
            <div className="p-4">
              Simplu spus, sunt un cetățean român, mândru de originile sale de
              pe plaiuri ieșene. Răspund cu implicare și entuziasm la numele
              complet de Ștefan Cosmin Ioneasa. Virusarea mea cu pasiunea pentru
              actul cultural-artistic al dansului a avut loc undeva în jurul
              vârstei de 5 ani, pe vremea când încă nu eram capabil să îmi asum
              anumite dorințe bine conturate și conștientizate în adevăratul
              sens al cuvântului. Asta pentru că la vârsta aceea, mintea îți
              zboară mai mult la joacă decât la pasiuni care să necesite
              devotament și muncă intensă.
            </div>
            <div className="w-full flex justify-end">
              <Button className="bg-mag hover:bg-mag-hover">
                Vezi mai mult
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerComponent;
