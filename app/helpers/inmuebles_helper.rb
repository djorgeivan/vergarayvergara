module InmueblesHelper
  def makeInteger number
    number.to_i
  end

  def makePhone(phone) 
    
    format = "(xxx) xxx-xxxx"
    for i in (0..10) 
      format = format.gsub("x", phone[i])
    end
  end

end
