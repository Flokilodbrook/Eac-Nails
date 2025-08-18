import { NailStyle } from "@/app/generated/prisma"

type UñasIconProps = {
  nailStyle: NailStyle
}

export default function Uñas({nailStyle} : UñasIconProps ) {
  return (
    <div>{nailStyle.name}</div>
  )
}
