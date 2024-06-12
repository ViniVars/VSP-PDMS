import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Calendar } from "lucide-react"
  
  
  export default function TableDemo({res}) {
    return (
      <Table>
        <TableCaption>The End</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>
                <div className='tab-head'>
                <Calendar className="size-4"/>Date
                </div>
                </TableHead>
            <TableHead>Eqpt</TableHead>
            <TableHead>Sub-Eqpt</TableHead>
            <TableHead>F_DEL</TableHead>
            <TableHead>T_DEL</TableHead>
            <TableHead>DEL_DUR</TableHead>
            <TableHead>CUM_DEL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {res.map((invoice) => (
            <TableRow key={invoice.DEL_DATE}>
              <TableCell>{invoice.DEL_DATE}</TableCell>
              <TableCell>{invoice.EQPT || "   -   "}</TableCell>
              <TableCell>{invoice.MATERIAL || "   -   "}</TableCell>
              <TableCell>{invoice.DELAY_FROM || "   -   "}</TableCell>
              <TableCell>{invoice.DELAY_TO || "   -   "}</TableCell>
              <TableCell>{invoice.DELAY_DURN || "   -   "}</TableCell>
              <TableCell>{invoice.CUM_DELAY || "   -   "}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3}>Total Rows : {res.length}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3}></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  