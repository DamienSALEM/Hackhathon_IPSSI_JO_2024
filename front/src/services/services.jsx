export default class ServiceApi {
  async getUniqueColumn({ table_name, column_name }) {
    const response = await fetch(
      'https://hackhathon-ipssi-jo-2024.onrender.com/get-unique-column',
      {
        body: {
          table_name,
          column_name,
        },
      },
    )

    const datas = await response.json()

    return datas
  }
}
