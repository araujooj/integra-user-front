import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { lighten } from "polished";

export default function GridPlaceholder({ repeatCount = 1 }) {
  const howMany = Array.from(Array(repeatCount).keys());
  return (
    <>
      {howMany.map((placeholder) => (
        <li key={placeholder}>
          <figure style={{ alignSelf: "center" }}>
            <Skeleton height={249} />
          </figure>
          <strong>
            <Skeleton width={220} />
            <Skeleton width={150} />
          </strong>
          <div>
            <span>
              <Skeleton width={100} />
            </span>
            <button type="button">
              <span
                style={{
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <SkeletonTheme
                  color={lighten(0.2, "#ff4d29")}
                  highlightColor={lighten(0.5, "#ff4d29")}
                >
                  <Skeleton width={92} />
                </SkeletonTheme>
              </span>
            </button>
          </div>
        </li>
      ))}
    </>
  );
}
