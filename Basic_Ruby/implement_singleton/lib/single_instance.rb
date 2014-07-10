class SingleInstance
  @@count = 'unset'
  def SingleInstance.new
    if(@@count == 'unset')
      @@count = 'set'
      @@instance = super
    else
      @@instance
    end
  end
end
