import React, { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";

const BookingDetail = ({ isOpen, closeModal, patient }) => {
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
                <Dialog.Panel className="relative w-full p-6 max-w-lg max-h-[90vh] overflow-y-auto transform rounded-lg bg-white text-left shadow-xl transition-all flex flex-col gap-5">
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

                  <div className="w-full flex flex-col mt-6">
                    <div className="w-full flex">
                      <div className="w-full p-2 border border-gray-200">
                        <h2 className="text-sm">Name:</h2>
                        <p className="text-lg text-gray-700">{patient?.name}</p>
                      </div>
                      <div className="w-full p-2 border border-gray-200">
                        <h2 className="text-sm">Contact:</h2>
                        <p className="text-lg text-gray-700">
                          {patient?.contact}
                        </p>
                      </div>
                    </div>

                    <div className="w-full p-2 border border-gray-200">
                      <h2 className="text-sm">Address:</h2>
                      <p className="text-lg text-gray-700">
                        {patient?.address}
                      </p>
                    </div>

                    <div className="w-full flex">
                      <div className="w-full p-2 border border-gray-200">
                        <h2 className="text-sm">Ailment:</h2>
                        <p className="text-lg text-gray-700">
                          {patient?.ailmentReason}
                        </p>
                      </div>
                      <div className="w-full p-2 border border-gray-200">
                        <h2 className="text-sm">Current Medication:</h2>
                        <p className="text-lg text-gray-700">
                          {patient?.currentMedication}
                        </p>
                      </div>
                    </div>

                    <div className="w-full flex">
                      <div className="w-full p-2 border border-gray-200">
                        <h2 className="text-sm">From date:</h2>
                        <p className="text-lg text-gray-700">
                          {patient?.fromDate}
                        </p>
                      </div>
                      <div className="w-full p-2 border border-gray-200">
                        <h2 className="text-sm">To Date:</h2>
                        <p className="text-lg text-gray-700">
                          {patient?.toDate}
                        </p>
                      </div>
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

export default BookingDetail;
