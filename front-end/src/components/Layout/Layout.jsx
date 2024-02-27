import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Responsive, WidthProvider } from "react-grid-layout";
import { fetchWindows } from "../../redux/windowActions";
import { StyledWrapper } from "./styles";
import Window from "../Window";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

function Layout() {
  const dispatch = useDispatch();
  const windows = useSelector((state) => state.window.windows);

  useEffect(() => {
    dispatch(fetchWindows());
  }, [dispatch]);

  /**
   * Define default layout for windows
   */
  const [layouts, setLayouts] = useState({
    lg: [
      { i: "0", x: 0, y: 0, w: 3, h: 3 },
      { i: "1", x: 4, y: 0, w: 9, h: 3 },
      { i: "2", x: 0, y: 1, w: 12, h: 3 },
    ],
  });

  const onLayoutChange = (currentLayout, allLayouts) => {
    setLayouts(allLayouts);
  };

  return (
    <div>
      {!!windows.length && (
        <ResponsiveReactGridLayout
          resizeHandles={["s", "w", "e", "n", "sw", "nw", "se", "ne"]}
          draggableCancel=".non-draggable"
          className="layout"
          layouts={layouts}
          cols={{ lg: 12, md: 12, sm: 1, xs: 1, xxs: 1 }}
          onLayoutChange={onLayoutChange}
        >
          {windows.map((window, idx) => (
            <StyledWrapper className="window" key={idx}>
              <Window window={window} />
            </StyledWrapper>
          ))}
        </ResponsiveReactGridLayout>
      )}
    </div>
  );
}

export default Layout;
