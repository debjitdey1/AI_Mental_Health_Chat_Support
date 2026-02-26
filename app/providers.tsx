// "use client";

// import { PrivyProvider } from "@privy-io/react-auth";
// import { AuthProvider } from "@/lib/contexts/auth-context";
// import { ThemeProvider } from "@/components/theme-provider";

// export function Providers({ children }: { children: React.ReactNode }) {
//   return (
//     <PrivyProvider
//       appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ""}
//       config={{
//         loginMethods: ["wallet"],
//         appearance: {
//           theme: "dark",
//           accentColor: "#674188",
//           showWalletLoginFirst: true,
//         },
//       }}
//     >
//       <AuthProvider>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="dark"
//           enableSystem
//           disableTransitionOnChange
//         >
//           {children}
//         </ThemeProvider>
//       </AuthProvider>
//     </PrivyProvider>
//   );
// }
"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const privyAppId = process.env.NEXT_PUBLIC_cmllyv8ln004n0djlilr7cqzk;

  // Prevent crash during build & SSR
  if (!privyAppId) {
    return <>{children}</>;
  }

  return (
    <PrivyProvider appId={privyAppId}>
      {children}
    </PrivyProvider>
  );
}
