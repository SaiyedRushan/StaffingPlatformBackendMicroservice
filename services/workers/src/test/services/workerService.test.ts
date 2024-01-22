import { createWorker } from "../../services/workerService"
import Worker from "../../models/workerModel"
import { v4 as uuidv4 } from "uuid"

jest.mock("uuid")

describe("workerService", () => {
  ;(uuidv4 as jest.Mock).mockReturnValue("mocked-uuid")

  it("should create a new job and add it to the jobs array", () => {
    const name = "Rushanshah Saiyed"
    const email = "rushan@gmail.com"
    const phoneNumber = "1234567890"

    const newWorker = createWorker({ name, email, phoneNumber })

    expect(newWorker).toEqual(expect.any(Worker))
    expect(uuidv4).toHaveBeenCalled()
    expect(newWorker.id).toBe("mocked-uuid")
    expect(newWorker.name).toBe(name)
    expect(newWorker.email).toBe(email)
    expect(newWorker.phoneNumber).toBe(phoneNumber)
  })
})
