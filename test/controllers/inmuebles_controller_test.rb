require 'test_helper'

class InmueblesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get inmuebles_index_url
    assert_response :success
  end

end
