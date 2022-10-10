import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useUnsplash } from '../hooks/useUnsplash'

interface Props {
  isOpen: boolean,
  updateShowModal: (value: boolean) => void
}

export default function DeletePhotoModal({ isOpen, updateShowModal }: Props) {
  const { handleDeletePhoto, selectedIdPhoto, updateSelectedIdPhoto, selectedPhotoName, updateSelectedPhotoName } = useUnsplash();
  const [confirmation, setConfirmation] = useState('');

  function closeModal() {
    updateShowModal(false);
    updateSelectedIdPhoto(-1);
    updateSelectedPhotoName('');
    setConfirmation('');
  }

  const handleSubmit = () => {
    if (confirmation === selectedPhotoName) {
      handleDeletePhoto(selectedIdPhoto);
      closeModal();
    } else {
      alert('Confirmation does not match');
    }
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Are you sure?
                  </Dialog.Title>
                  <div className="mt-4">
                    <label htmlFor="confirmation" className='block'>
                      <p className="text-sm my-2 font-medium">
                        Repeat the name <span className='font-black'>{selectedPhotoName}</span> to confirm
                      </p>
                      <input
                        id='confirmation'
                        className='border border-gray-600 rounded-xl p-2 w-full'
                        type="text"
                        value={confirmation}
                        onChange={(e) => setConfirmation(e.target.value)}
                        placeholder='************'
                      />
                    </label>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <div className='flex gap-5'>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent duration-500 bg-gray-100 px-6 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 "
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent duration-500 bg-red-500 px-6 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2"
                        onClick={handleSubmit}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
