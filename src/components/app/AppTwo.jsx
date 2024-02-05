import { createPortal } from "react-dom"
import { useRef, useEffect } from "react"
import Button from "../Button"

export default function AppTwo() {
  const [modal, setModal] = useState(false)

  return (
    <>
      <Button onClick={() => setModal(true)}>Открыть окно</Button>

      <Modal>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          aliquid, corrupti veniam consequatur, nisi tenetur adipisci odio
          facilis explicabo optio quam labore quod, autem asperiores commodi
          quia at obcaecati non!
        </p>
      </Modal>
    </>
  )
}
