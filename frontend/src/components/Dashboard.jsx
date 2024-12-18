import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Sidebar from "./Sidebar";
import {
  PlusIcon,
  CameraIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import MuiAlert from "@mui/material/Alert";
import * as XLSX from "xlsx";
import { Snackbar } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Dashboard = () => {
  const [inventory, setInventory] = useState([]);
  const [itemName, setItemName] = useState("");
  const [count, setCount] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  const [editingQuantity, setEditingQuantity] = useState("");
  const [open, setOpen] = useState(false);

  const exportData = () => {
    if (!inventory || inventory.length === 0) {
      alert("No data available to export");
      return;
    }
    const dataToExport = inventory.map((item) => ({
      Item: item.name,
      Quantity: item.count,
    }));
    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Your List");
    XLSX.writeFile(workbook, "pantry_data.xlsx");
  };

  const editItem = (name, count) => {
    setEditingItem(name);
    setEditingQuantity(count);
  };

  const addItem = async () => {


  };
  const removeItem = async (item) => {

  };
  const handleCameraClick = async () => {

  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSnackbarClose = () => setSnackbarOpen(false);

  return (
    <>
      <Sidebar />
      <div className="ml-72 pt-5 min-h-screen bg-white">
        <div className="text-4xl font-bold mb-6">Welcome To The Stock Check</div>


        <div className="mb-6">
          <Input
            placeholder="Search for items..."
            className="w-1/3 py-2 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="flex gap-6 mb-6">
          <div className="w-80 p-4 bg-white shadow-lg rounded-lg">
            <Popover>
              <PopoverTrigger asChild>
                <div className="bg-purple-500 text-black font-bold px-4 py-2 rounded flex items-center space-x-2 hover:bg-purple-700 cursor-pointer">
                  <PlusIcon className="w-5 h-5" />
                  <span>Add New Items</span>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Items</h4>
                    <p className="text-sm text-muted-foreground">
                      Add New Item with Quantity
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="itemName">Item</Label>
                      <Input
                        id="itemName"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        className="col-span-2 h-8"
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="count">Quantity</Label>
                      <Input
                        id="count"
                        type="number"
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                        className="col-span-2 h-8"
                      />
                    </div>
                    <Button
                      onClick={addItem}
                      className="bg-purple-700 hover:bg-purple-900 mt-4"
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="w-80 p-4 bg-white shadow-lg rounded-lg">
            <button
              onClick={handleCameraClick}
              className="bg-purple-500 text-black font-bold px-4 py-2 rounded flex items-center space-x-2 hover:bg-purple-700 w-full"
            >
              <CameraIcon className="w-5 h-5" />
              <span>Add Items Using Camera</span>
            </button>
          </div>

          <div className="w-80 p-4 bg-white shadow-lg rounded-lg">
            <button
              className="bg-purple-500 text-black font-bold px-4 py-2 rounded flex items-center space-x-2 hover:bg-purple-700 w-full"
              onClick={exportData}
            >
              <ArrowDownIcon className="w-5 h-5" />
              <span>Export Items List</span>
            </button>
          </div>
        </div>

       
        <div className="mt-6 p-4 w-full bg-white shadow-md rounded-lg">
          <Table className="w-full">
            <TableCaption className="text-lg font-semibold mb-4 text-center">
              List of Items
            </TableCaption>
            <TableHeader className="bg-neutral-200 text-gray-900">
              <TableRow>
                <TableHead className="py-4 text-center">Item</TableHead>
                <TableHead className="py-4 text-center">Quantity</TableHead>
                <TableHead className="py-4 text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map((item) => (
                <TableRow key={item.name}>
                  <TableCell className="py-3 text-center">{item.name}</TableCell>
                  <TableCell className="py-3 text-center">{item.count}</TableCell>
                  <TableCell className="py-3 text-center">
                    <Button
                      onClick={() => removeItem(item.name)}
                      className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded mr-2"
                    >
                      Remove
                    </Button>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button
                          onClick={() => editItem(item.name, item.count)}
                          className="bg-purple-500 hover:bg-purple-700 text-white px-2 py-1 rounded"
                        >
                          Edit
                        </Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Edit Item</SheetTitle>
                          <SheetDescription>
                            Update the item's quantity.
                          </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="itemName">Item</Label>
                            <Input
                              id="itemName"
                              value={editingItem || ""}
                              onChange={(e) => setEditingItem(e.target.value)}
                              className="col-span-3"
                              disabled
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="count">Quantity</Label>
                            <Input
                              id="count"
                              type="number"
                              value={editingQuantity || ""}
                              onChange={(e) =>
                                setEditingQuantity(e.target.value)
                              }
                              className="col-span-3"
                            />
                          </div>
                        </div>
                        <SheetFooter>
                          <SheetClose asChild>
                            <Button
                              onClick={updateItem}
                              className="bg-purple-500 hover:bg-purple-700"
                            >
                              Save changes
                            </Button>
                          </SheetClose>
                        </SheetFooter>
                      </SheetContent>
                    </Sheet>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
        >
          <Alert onClose={handleSnackbarClose} severity="success">
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};

export default Dashboard;
