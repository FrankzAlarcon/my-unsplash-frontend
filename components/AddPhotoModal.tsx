import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useUnsplash } from '../hooks/useUnsplash';

interface Props {
  isOpen: boolean,
  updateShowModal: (value: boolean) => void
}

export default function AddPhotoModal({ isOpen, updateShowModal }: Props) {
  const { handleAddPhoto } = useUnsplash();

  const [label, setLabel] = useState('');
  const [url, setUrl] = useState('');

  function closeModal() {
    updateShowModal(false);
    setLabel('');
    setUrl('');
  }

  const handleSubmit = () => {
    handleAddPhoto(label, url);
    closeModal();
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
                    Add a new photo
                  </Dialog.Title>
                  <div className="mt-2 space-y-4">
                    <label htmlFor="label" className='block'>
                      <p className="text-sm my-1 font-medium">
                        Label
                      </p>
                      <input
                        id='label'
                        className='border border-gray-600 rounded-xl p-2 w-full'
                        type="text"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        placeholder='Write the title'
                      />
                    </label>
                    <label htmlFor="photo-url" className='block'>
                      <p className="text-sm my-1 font-medium">
                        Photo URL
                      </p>
                      <input
                        id='photo-url'
                        className='border border-gray-600 rounded-xl p-2 w-full'
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder='https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r...'
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
                        className="inline-flex justify-center rounded-md border border-transparent duration-500 bg-green-500 px-6 py-2 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
                        onClick={handleSubmit}
                      >
                        Submit
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
