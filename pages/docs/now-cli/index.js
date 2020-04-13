import NowCLIDocs from '~/components/references-mdx/now-cli/index.mdx'
import ReferenceLayout from '~/components/layout/reference'
import { PRODUCT_SHORT } from '~/lib/constants'

export default () => (
  <ReferenceLayout
    Data={<NowCLIDocs />}
    title={`${PRODUCT_SHORT} CLI Reference`}
    description={`A complete reference of the ${PRODUCT_SHORT} CLI detailing the available commands, their usage and optional flags`}
  />
)
