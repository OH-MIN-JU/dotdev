import React from 'react';
import SectionTitle from '../common/SectionTitle';
import codeImg from '../../assets/code.jpg';
import { checklistItems } from '../../constants/data';
import { CheckCircle2 } from 'lucide-react';

const Workflow = () => {
  return (
    <div className="workflow-wrapper mt-20 text-center">
      <SectionTitle
        whiteString="Accelerate Your"
        indigoString="Coding Workflow"
      />

      <div className="check-lists flex flex-wrap justify-center">
        <div className="list-left w-full lg:w-1/2 p-2">
          <img src={codeImg} alt="code" />
        </div>
        <div className="list-right w-full lg:w-1/2 pt-12">
          {checklistItems.map((item, idx) => (
            <div key={idx} className="flex mb-12 gap-6">
              <div className="text-green-400 bg-neutral-800 h-10 w-10 p-2 rounded-full">
                <CheckCircle2 />
              </div>
              <div className="text-left">
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
