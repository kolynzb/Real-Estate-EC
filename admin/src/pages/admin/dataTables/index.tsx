// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
import DevelopmentTable from "../../../pages/admin/dataTables/components/DevelopmentTable";
import CheckTable from "../../../pages/admin/dataTables/components/CheckTable";
import ColumnsTable from "../../../pages/admin/dataTables/components/ColumnsTable";
import ComplexTable from "../../../pages/admin/dataTables/components/ComplexTable";
import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
} from "../../../pages/admin/dataTables/variables/columnsData";
import tableDataDevelopment from "../../../pages/admin/dataTables/variables/tableDataDevelopment.json";
import tableDataCheck from "../../../pages/admin/dataTables/variables/tableDataCheck.json";
import tableDataColumns from "../../../pages/admin/dataTables/variables/tableDataColumns.json";
import tableDataComplex from "../../../pages/admin/dataTables/variables/tableDataComplex.json";
import React from "react";

export default function Settings() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 2 }}
        spacing={{ base: "20px", xl: "20px" }}>
        <DevelopmentTable
          columnsData={columnsDataDevelopment}
          tableData={tableDataDevelopment}
        />
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        />
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
      </SimpleGrid>
    </Box>
  );
}
