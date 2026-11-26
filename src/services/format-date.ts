const FORMAT = new Intl.DateTimeFormat(`en-US`, {
  year: `numeric`,
  month: `long`,
  day: `2-digit`,
  timeZone: `UTC`,
})

export const formatDate = (date: Date): string => FORMAT.format(date)

export const toISODate = (date: Date): string => date.toISOString().slice(0, 10)
