type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};
export default function Modal({
  open,
  onClose,
  title,
  children,
  ...rest
}: ModalProps) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      {...rest}
    >
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-xl font-semibold">Modal</h2>
        <p className="text-sm text-gray-600">This is a modal</p>
      </div>
    </div>
  );
}
