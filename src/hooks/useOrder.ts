import { useState } from "react"
import type { OrderItem } from "../types"

export default function useOrder()  {

    const [order,serOrder] = useState<OrderItem[]>([])

    return {

    }
}