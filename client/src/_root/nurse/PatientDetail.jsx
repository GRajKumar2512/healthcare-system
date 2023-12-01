import React, { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";

const PatientDetail = ({ isOpen, closeModal }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          {/* this child is the background overlay of the dialog box */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full p-6 max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                    onClick={closeModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <div className="w-full flex mt-6">
                    <div className="w-full flex flex-col">
                      <div className="px-2 py-2 border">
                        <h3 className="font-semibold text-lg mb-1">
                          Full Name:
                        </h3>
                        <p>Arjun Verma</p>
                      </div>
                      <div className="px-2 py-2 border">
                        <h3 className="font-semibold text-lg mb-1">
                          Date of Birth
                        </h3>
                        <p>1-1-2001</p>
                      </div>
                      <div className="px-2 py-2 border">
                        <h3 className="font-semibold text-lg mb-1">Address</h3>
                        <p>India</p>
                      </div>
                    </div>

                    <div className="w-full flex flex-col">
                      <div className="px-2 py-2 border">
                        <h3 className="font-semibold text-lg mb-1">Gender:</h3>
                        <p>Male</p>
                      </div>
                      <div className="px-2 py-2 border">
                        <h3 className="font-semibold text-lg mb-1">
                          Contact Information:
                        </h3>
                        <p>jlasdkfj</p>
                      </div>
                      <div className="px-2 py-2 border">
                        <h3 className="font-semibold text-lg mb-1">
                          Emergency Contact:
                        </h3>
                        <p>lalsdkfj</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="px-2 py-2 border">
                      <h3 className="font-semibold text-lg mb-1">
                        Known Allergies:
                      </h3>
                      <p>dkf kaj lakd</p>
                    </div>
                    <div className="px-2 py-2 border">
                      <h3 className="font-semibold text-lg mb-1">
                        Chronic Conditions:
                      </h3>
                      <p>dkf kaj lakd</p>
                    </div>
                    <div className="px-2 py-2 border">
                      <h3 className="font-semibold text-lg mb-1">
                        Medications:
                      </h3>
                      <p>dkf kaj lakd</p>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default PatientDetail;
