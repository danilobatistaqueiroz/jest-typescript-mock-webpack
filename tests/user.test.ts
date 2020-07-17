import { create } from "../src/user";

test('table test', () => {
  expect(create().outerHTML).toBe('<table></table>');
});