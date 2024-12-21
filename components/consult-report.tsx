import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ConsultReport() {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <h1 className="mb-4 text-center text-xl font-bold uppercase md:text-2xl">
        Laporan Konsultasi
      </h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Semester</TableHead>
            <TableHead>Tanggal Konsultasi</TableHead>
            <TableHead>Oleh</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>5</TableCell>
            <TableCell>24 November 2024</TableCell>
            <TableCell>Kamu Membutuhkan Bantuan Profesional!</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">2</TableCell>
            <TableCell>5</TableCell>
            <TableCell>24 November 2024</TableCell>
            <TableCell>Kamu Membutuhkan Bantuan Profesional!</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">3</TableCell>
            <TableCell>5</TableCell>
            <TableCell>24 November 2024</TableCell>
            <TableCell>Kamu Membutuhkan Bantuan Profesional!</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
