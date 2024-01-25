import "./Tableform.css";

const Tableform = ({ homepagedata }) => {
  return (
    <div className="main_table_div">
      <div className="container">
        <div className="col-lg-12">
          <div className="How-niuli-is-better-heading">
            <h2>{homepagedata?.why_niuli_better_headings?.heading_en}</h2>
          </div>
          <table className="table-section">
            <tr>
              <th className="brand_color_price"></th>
              <th className="others_heading">OTHERS</th>
              <th className="Niulli_heading">NIULI</th>
            </tr>

            <tr>
              <td className="brand_color_price">PRICE</td>
              <td className="other_text_wraplist">
                {homepagedata?.why_niuli_better?.price_other_en}
              </td>
              <td className="other_text_wraplist_last_row">
                {homepagedata?.why_niuli_better?.price_niuli_en}
              </td>
            </tr>
            <tr>
              <td className="brand_color_price">SIMPLICITY</td>
              <td className="other_text_wraplist">
                {homepagedata?.why_niuli_better?.simplicity_other_en}
              </td>
              <td className="other_text_wraplist_last_row">
                {homepagedata?.why_niuli_better?.simplicity_niuli_en}
              </td>
            </tr>
            <tr>
              <td className="brand_color_price">QUALITY</td>
              <td className="other_text_wraplist">
                {homepagedata?.why_niuli_better?.quality_other_en}
              </td>
              <td className="other_text_wraplist_last_row">
                {homepagedata?.why_niuli_better?.quality_niuli_en}
              </td>
            </tr>
            <tr>
              <td className="brand_color_price">TRANSPARENCY</td>
              <td className="other_text_wraplist">
                {homepagedata?.why_niuli_better?.transparency_other_en}
              </td>
              <td className="other_text_wraplist_last_row">
                {homepagedata?.why_niuli_better?.transparency_niuli_en}
              </td>
            </tr>
            <tr>
              <td className="brand_color_price">TIME</td>
              <td className="other_text_wraplist">
                {homepagedata?.why_niuli_better?.time_other_en}
              </td>
              <td className="other_text_wraplist_last_row">
                {homepagedata?.why_niuli_better?.time_niuli_en}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tableform;
