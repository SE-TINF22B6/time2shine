export const metadata = {
  title: 'Impressum - time2shine',
  description: 'Online Gaming Platform',
}

import React from "react";

export default function Impressum() {
  return (
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1">Impressum.</h1>
            </div>

            {/* Impressum */}
            Dieser Webauftritt dient ausschließlich zur privaten Nutzung und enthält keine Werbung, weshalb keinerlei Einnahmen damit generiert werden.

          </div>
        </div>
      </section>
  )

}

