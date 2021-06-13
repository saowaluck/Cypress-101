describe("Search by CA", () => {
    before(() => {
        cy.visit("http://outage-map.pea.odds.team/")
    })

    it("Should show detail", () => {
        const ca = 20006659468
        cy.get("#search").type(ca + '{enter}')
        cy.contains('ไฟฟ้าดับ')
        cy.get(".MuiGrid-justify-xs-flex-end > .MuiTypography-root").should("contain", "หมายเลขเหตุการณ์: 4020156438")
    })
})