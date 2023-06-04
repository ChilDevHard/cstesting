import data from '../../../database/data.json';
import axios from 'axios';

export default async function handler(req, res) {
  const { id } = req.query;

  const car = data.cars.find(car => car.id === parseInt(id));

  if (car) {

		/*static json search
    const brand = data.brands.find(brand => brand.id === car.brandId);
    const company = data.companies.find(company => company.id === brand.companyId);
		*/

		try {

			const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';

      const brandRequest = await axios.get(`${baseUrl}/api/brands/${car.brandId}`);
      const brand = brandRequest?.data;
			
      const companyRequest = await axios.get(`${baseUrl}/api/companies/${brand.companyId}`);
      const company = companyRequest?.data;

      const carWithDetails = {
        ...car,
        brand: brand?.name || '',
        company: company?.name || ''
      };

      res.status(200).json(carWithDetails);
			
    } catch {
			res.status(500).json({message: "Network error"})
		}

  } else {
    res.status(404).json({ message: 'Car not found' });
  }
}