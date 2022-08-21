import React, { FC, useState } from "react";
import RootPage from "../RootPage";

import JqxBarGauge, {
  IBarGaugeProps,
} from "jqwidgets-scripts/jqwidgets-react-tsx/jqxbargauge";

const HomePage: FC = () => {
  const [values, setValues] = useState([10, 20, 30, 40, 50]);
  const [tooltip, setToolTip] = useState({
    formatFunction(value?: number | string): string {
      return "Year: 2016 Price Index:" + value;
    },
    visible: true,
  });

  return (
    <RootPage>
      <JqxBarGauge
        width={600}
        height={600}
        max={60}
        colorScheme={"scheme02"}
        values={values}
        tooltip={tooltip}
      />
    </RootPage>
  );
};

export default HomePage;
