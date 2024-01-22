// when using mongodb, we would be creating a schema here instead
class Job {
  id: string
  title: string
  description: string
  salaryRange: string
  applicants: string[]
  hiredWorkerId: string | null
  isHired: boolean = false

  constructor(id: string, title: string, description: string, salaryRange: string) {
    this.id = id
    this.title = title
    this.description = description
    this.salaryRange = salaryRange
    this.applicants = []
    this.hiredWorkerId = null
    this.isHired = false
  }

  hireWorker(workerId: string): void {
    this.hiredWorkerId = workerId
    this.isHired = true
  }
}

export default Job
