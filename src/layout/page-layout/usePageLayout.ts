import { PageLayoutAction, useAppDispatch, useAppSelector } from "@/redux";
import { useEffect, useState } from "react";

// export function usePageLayoutRedux(initialView: any) {
//   const dispatch = useAppDispatch();
//   const { page, view, modal } = useAppSelector((s) => s.pageLayout);

//   console.log("usePageLayoutRedux", initialView);
//   useEffect(() => {
//     if (view === null) {
//       console.log("view: ", view, "initialView: ", initialView);
//       dispatch(PageLayoutAction.setView(initialView));
//       console.log("se introdujo view: ", initialView);
//     }
//   }, [view, dispatch, initialView]);

//   return {
//     page,
//     view,
//     modal,
//   };
// }

export function usePageLayoutRedux() {
  console.log("---Inicia usePageLayoutRedux ---");
  const [layout, setLayout] = useState({
    page: null,
    view: null,
    modal: null,
  });

  useEffect(() => {
    console.log("-Inicia useEffect-");
    if (layout.view === null) {
      console.log("view es: ", layout.view);
    }
    console.log("-Termina useEffect-");
  }, [layout]);

  function setView() {
    setLayout((prev: any) => {
      if (prev.view === null) {
        return { ...prev, view: "cronometro" };
      }
      return prev; // no cambia nada si ya hay view
    });
  }

  console.log("---Termina usePageLayoutRedux ---");
  return {
    layout,
    setView,
  };
}
