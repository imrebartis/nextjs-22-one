import { useRouter } from 'next/router'
import Link from 'next/link'

const CoffeeStore = () => {
  const router = useRouter()
  console.log('router', router)
  return (
    <div>
      <p>Coffee Store Page {router.query.id}</p>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  )
}

export default CoffeeStore
