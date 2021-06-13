describe("Home", () => {
    before(() => {
        cy.visit("http://outage-map.pea.odds.team/")
    })

    it("Should display logo", () => {
        cy.get("h1").should("contain", "PEA Outage Map")
    })

    it("Should show search by ca box", () => {
        cy.get("#search").should("be.visible")
        cy.get("#search")
            .invoke("attr", "placeholder")
            .should("contain", "ค้นหาเลขCA / พื้นที่")
    })

    it("Should show symbol", () => {
        cy.get(".MuiPaper-root > .MuiTypography-root")
            .should("be.visible")
            .should("contain", "สัญลักษณ์")
    })

    it("Should show info when click symbol", () => {
        cy.get(".MuiPaper-root > .MuiTypography-root").click()
        cy.get(".MuiGrid-container > :nth-child(1) > .MuiTypography-root").should("contain", "เหตุการณ์ไฟดับ")
        cy.get(".jss65 > .MuiTypography-root").should("contain", "แผนดับไฟ")
    })
})